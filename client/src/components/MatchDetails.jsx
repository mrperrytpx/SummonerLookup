import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const getMatchDetails = async (id, region) => {
  const response = await fetch(`/api/match/${region}/${id}`);
  if (!response.ok) throw new Error("Couldn't fetch that match");

  const data = await response.json();
  console.log(data);
  if (!data) throw new Error("Invalid Match ID");

  return data;
}

const MatchDetials = ({ id }) => {
  const { region } = useParams();

  const { data, status, error } = useQuery(
    ['match-details', id, region],
    () => getMatchDetails(id, region),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000000
    }
  );

  return (
    <div className="match-details">
      {data && <p>{JSON.stringify(data?.metadata, null, 2)}</p>}
      {status && <p>{status}</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default MatchDetials;