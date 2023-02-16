import axios from 'axios';
import React, { useEffect, useState } from 'react'



function Users() {
  const [firstPageUsers, setFirstPageUsers ] = useState([])
  const [numUsersPerPage, setNumUsersPerPage] = useState(8)
  const [pageNum, setPageNum] = useState(1)
  const [national, setNational] = useState('')


  

  useEffect(()=>{
    // getPageUsers()
    // getSecondPageUsers()
    // getUsersFilteredByNation('us')
    // getUsersFilteredByGender('male')
  },[])

  async function getPageUsers(){
    let res = await axios.get(`https://randomuser.me/api?results=${numUsersPerPage}&page=${pageNum}`)
    if(res.status === 200){
      setFirstPageUsers(res.data.results)
      console.log(res.data.results)
    }
  }


  async function getUsersFilteredByNation(national){
    let res = await axios.get(`https://randomuser.me/api/?results=${numUsersPerPage}&nat=${national}`)
    if(res.status === 200){
      setFirstPageUsers(res.data.results)
      console.log(res.data.results)
    }
  }

  async function getUsersFilteredByGender(gender){
    let res = await axios.get(`https://randomuser.me/api/?gender=${gender}`)
    if(res.status === 200){
      setFirstPageUsers(res.data.results)
      console.log(res.data.results)
    }
  }



  return (
    <div></div>
  )
}

export default Users;
