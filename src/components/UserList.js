import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UserList = () => {
    const [listOfUSer, setListOfUSer] = useState([]);
    useEffect(() => {
        function fetchData() {
            axios.get("https://jsonplaceholder.typicode.com/users")
                //qd l requetes arrive s kil fait
                .then(function (response) {
                    setListOfUSer(response.data)
                    //console.log(response.data)
                })
                    //qd il y'a erreur
                    .catch(function (error) {
                        console.log(error);
                    })
        }
        fetchData();
    },[])
    return (
        <div>
            
            <table className="table" key={listOfUSer.id}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <thead>
                            <h3>Adresse</h3>
                                <tr>
                                    <th>street</th>
                                    <th>suite</th>                       
                                    <th>city</th>
                                    <th>zipcode</th>
                                </tr>  
                    </thead>
                                                
                                <th>lat</th>
                                <th>lng</th>
                                <th>phone</th>
                                <th>website</th>
                                <th>name</th>
                                <th>catchPhrase</th>
                                <th>bs</th>
                            
                </tr>
                </thead>
                {listOfUSer.map(list => (
                    <tbody>
                        <tr>
                            <td>{list.id}</td>
                            <td> {list.name} </td>
                            <td> {list.username} </td>
                            <td> {list.email} </td>
                            <td>
                                <td>{list.address.street}</td>
                                <td>{list.address.suite}</td>
                                <td>{list.address.city}</td>
                                <td>{list.address.zipcode}</td>
                            </td>
                                
                                    <td> {list.address.geo.let} </td>
                                    <td> {list.address.geo.lng} </td>
                                
                                <td> {list.phone} </td>
                                <td> {list.website} </td>
                               
                                    <td> {list.company.name} </td>
                                    <td> {list.company.catchPhrase} </td>
                                    <td> {list.company.bs} </td>
                                
                            
                        </tr>
                    </tbody>
                    
                ))
            }
            </table>
        </div>
    );
};

export default UserList;