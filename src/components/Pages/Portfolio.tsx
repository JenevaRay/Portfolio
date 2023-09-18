import React, { useState } from 'react';
import Project from './Project';
import axios, { AxiosResponse } from 'axios';
import useAsyncEffect from 'use-async-effect';

import { Repository, Repositories } from '../Types';
import Row from 'react-bootstrap/Row';

const getRepos = async (): Promise<Repository[]> => {
  try {
    const response: AxiosResponse<Repository[]> = await axios.get(
      'https://api.github.com/users/JenevaRay/repos'
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default function Portfolio(): JSX.Element {
  const [data, setData] = useState<Repositories>([]);
  useAsyncEffect(async () => {
    const repos = await getRepos();
    // console.log(repos);
    setData(
      repos.filter((repo) => {
        return !repo.private;
      })
    );
  }, []);
  return (
    <div>
      <Row lg={2} md={3} sm={4}>
        {data.length > 0 &&
          data
            .filter((repo) => {
              return !repo.private && !repo.disabled;
            })
            .map((item: Repository) => {
              if (item.description == null) {
                item.description = '';
              }

              const { name } = item;
              let image = '';
              let homepage = item.homepage;
              // for addendum info
              switch (name) {
                case 'ecommerce-api':
                  image = './ecommerce-api.png';
                  break;
                case 'employee-tracker':
                  image = './employee-tracker.png';
                  break;
                case 'LuxuryVoyages':
                  homepage = 'http://7.tcp.ngrok.io:20264';
                  image = './LuxuryVoyages.png';
                  break;
                case 'JATE':
                  homepage =
                    'https://tranquil-inlet-98908-e95c48e17247.herokuapp.com';
                  image = './JATE.png';
                  break;
                case 'SuperGreen':
                  image = './SuperGreen.png';
                  break;
                case 'Portfolio':
                  image = './Portfolio.png';
                  break;
                default:
              }
              return (
                <Project
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  image={image}
                  github={item.ssh_url}
                  htmlUrl={item.html_url}
                  homepage={homepage}
                />
              );
            })}
      </Row>
    </div>
  );
}
