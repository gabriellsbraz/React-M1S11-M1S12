import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "./styled";
import { StyledLink } from "./styled";
function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const load = async () => {
      const response = await api.get(`users/gabriellsbraz/repos`);
      setRepos(response.data);

      console.log(response.data)
    };
    load();
  }, []);

    return (
        <div>
        {repos.length > 0 &&
            repos.map(({ name, id, html_url }) => {
            return (
                <StyledLink key={id} href={html_url} target="_blank" rel="noreferrer">
                <Card>{name}</Card>
                </StyledLink>
            );
            })}
        </div>
    );
}

export { Portfolio };