'use client';

import { useState } from 'react';
import { players as initialPlayers } from '@/data/players';
import { teams as initialTeams } from '@/data/teams';
import { TrophyIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

type Player = (typeof initialPlayers)[number];
type Team = typeof initialTeams[number];

const TeamPage = () => {
  const [availablePlayers, setAvailablePlayers] = useState<Player[]>(initialPlayers);
  const [teams, setTeams] = useState<Team[]>(initialTeams);

  const draftPlayer = (playerId: number, teamId: number) => {
    const player = availablePlayers.find(p => p.id === playerId);
    if (!player) return;

    setAvailablePlayers(prev => prev.filter(p => p.id !== playerId));

    setTeams(prev =>
      prev.map(team =>
        team.id === teamId
          ? { ...team, players: [...team.players, player] }
          : team
      )
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container space-y-16">
        <h1 className="text-4xl font-bold text-center">Draft Room</h1>

        {/* Teams Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Teams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teams.map(team => (
              <div
                key={team.id}
                className="bg-dark/50 p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-4">{team.name}</h3>
                <ul className="space-y-2">
                  {team.players.length > 0 ? (
                    team.players.map(p => <li key={p.id} className="text-sm">{p.name}</li>)
                  ) : (
                    <li className="text-gray-400 text-sm italic">No players yet</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Available Players Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Available Players</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availablePlayers.map(player => (
              <li
                key={player.id}
                className="flex items-center justify-between p-4 rounded-lg bg-dark/60 shadow-sm hover:bg-dark/70 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={player.profileImage}
                    alt={player.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="text-sm">{player.name}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <TrophyIcon className="w-5 h-5 text-yellow-400" />
                  <span className="">{player.wins}</span>
                </div>
                {/* <div className="text-sm">
                  {player.statistics}
                </div> */}
                <select
                  onChange={e => draftPlayer(player.id, Number(e.target.value))}
                  defaultValue=""
                  className="bg-primary text-white border-none rounded px-4 py-2 text-sm transition-all hover:bg-gray-100"
                >
                  <option value="" disabled>Select Team</option>
                  {teams.map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
