import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { useQuery } from "react-query";

const getMatchDetails = async ({ queryKey }) => {
  const region = queryKey[0], id = queryKey[1];
  console.log(region, id);
  const response = await fetch(`/api/match/${region}/${id}`);
  if (!response.ok) throw new Error("Couldn't fetch that match");

  const data = await response.json();
  console.log(data);
  if (!data) throw new Error("Invalid Match ID");

  return data;
}

const MatchDetials = ({ id }) => {
  const {playerData: {accountData: {region}}} = useContext(PlayerContext);

  const {data, status, error} = useQuery([region, id], getMatchDetails, {
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 30000000
  });

  return ( 
    <div className="match-details">
      {data && <p>{JSON.stringify(data?.metadata, null, 2)}</p>}
      {status && <p>{status}</p>}
      {error && <p>{error.message}</p>  }
    </div>
  );
}
 
export default MatchDetials;