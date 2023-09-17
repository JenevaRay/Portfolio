import React, { useState } from 'react';
import Project from './Project'
import axios, { AxiosResponse } from 'axios'
import useAsyncEffect from 'use-async-effect'

import { Repository, Repositories } from '../Types';
// import ThemeProvider from 'react-bootstrap/ThemeProvider'
// import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const getRepos = async (): Promise<Repository[]> => {
    try {
        const response: AxiosResponse<Repository[]> = await axios.get('https://api.github.com/users/JenevaRay/repos')
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export default function Portfolio(): JSX.Element {
    const [data, setData] = useState <Repositories> ([])
    useAsyncEffect(async () => {
        const repos = await getRepos()
        console.log(repos)
        setData(repos.filter((repo)=>{return !repo.private}))
    }, [])
    return (
        <div>
            <Row lg={2} md={3} sm={4}>
                {data.length > 0 && data.filter((repo)=>{return (!repo.private && !repo.disabled)}).map((item: Repository) => {
                    if (item.description == null) {
                        item.description = ""
                    }
                    return(
                    <Project 
                        key={item.id}
                        title={item.name}
                        description={item.description}
                        image="https://picsum.photos/300/200"
                        github={item.ssh_url}
                        htmlUrl={item.html_url}
                    />
                    )
                })}
                
            </Row>
        </div>
    )
}