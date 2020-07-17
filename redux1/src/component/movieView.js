import React from 'react';
//this has only view part
const movieView = (props) => {
    //Iterate over State data
    const renderList = ({list}) => {
        if(list){
            return list.map(data =>{
                return (
                    <tbody>
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                    </tr>
                    </tbody>
                )}
            )
        }
    }
    //View
        return(
            <div>
                <table className="table table-striped table-light">
                    <thead className="thead thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                    </tr>
                    </thead>
                        {renderList(props)}
                </table>
            </div>
        );
}

export default movieView;