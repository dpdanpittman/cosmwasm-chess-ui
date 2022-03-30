import React, { ReactNode, useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import { ChessGameSummary, CosmWasmChess } from "../CosmWasmChess";
import "./Games.css";

export function Games() {
  const contract = useOutletContext<CosmWasmChess>();
  const [state, setState] = useState<{
    games?: ChessGameSummary[];
    status?: ReactNode;
    error?: unknown;
  }>({});

  useEffect(() => {
    loadGames();
  }, [contract.address]);

  function formatAddress(address?: string) {
    if (contract.address && contract.address === address) {
      return "You";
    } else {
      return contract.client.formatAddress(address);
    }
  }

  async function loadGames(): Promise<void> {
    setState({ ...state, status: "Loading games" });
    return contract
      .getGames({ player: contract.address })
      .then((games: ChessGameSummary[]) => {
        setState((state) => {
          let status: ReactNode | undefined = undefined;
          if (games.length === 0) {
            status = (
              <>
                No games yet,{" "}
                <Link to="/challenges">find or create a challenge</Link>
              </>
            );
          }
          return { ...state, games, status };
        });
      })
      .catch((error: any) => {
        setState((stat) => {
          return { ...state, error, status: undefined };
        });
      });
  }

  return (
    <>
      <h2>Games</h2>
      {state.error ? <p className="error">{`${state.error}`}</p> : <></>}
      {state.status ? <p className="status">{state.status}</p> : <></>}

      {state.games && state.games.length > 0 ? (
        <table className="games">
          <thead>
            <tr>
              <th className="game_id">ID</th>
              <th className="white">White</th>
              <th className="black">Black</th>
              <th className="game_status">Status</th>
            </tr>
          </thead>
          <tbody>
            {state.games.map((g, key) => (
              <tr key={key} className={g.status ? "gameover" : ""}>
                <td className="game_id">{g.game_id}</td>
                <td className="white">{formatAddress(g.player1)}</td>
                <td className="black">{formatAddress(g.player2)}</td>
                <td className="game_status">
                  <Link to={`/games/${g.game_id}`}>
                    {g.status ? g.status : `${g.turn_color} to play`}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </>
  );
}
