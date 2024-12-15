import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';


const PostDetail = () => {

    let params = useParams();
    let [searchParams] = useSearchParams();
    console.log(searchParams.entries())
    return(
        <div className='panel panel-warning'>
            <div className='panel-heading'>
                <h2>{params.topic} Details</h2>
            </div>
            <div className='panel-body'>
                <h3>{params.topic} Details Page</h3>
                <p>
                    {params.topic} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h3>You are on page number {searchParams.getAll('page')}</h3>
                <h3>You are on page number {searchParams.getAll('code')}</h3>

                <div>
                    <ul>
                        {Array.from(searchParams.entries()).map(([key,value]) =>(
                            <li key={key}>
                                {key}:{value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    </div>
    )
}

export default PostDetail