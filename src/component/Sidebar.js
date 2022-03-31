import { Avatar, Button } from '@material-ui/core';
import { AddAPhoto, CardMembership, Edit, ListAlt, Score } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Sidebar.css'
import { storage } from '../firebase'
import { useStateValue } from '../StateProvider';
import { Fade } from 'react-reveal';
function Sidebar() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState()

  const [{token},dispatch] = useStateValue();

  const ACC = 'https://kernelbackend.herokuapp.com/api/user/account'

  const logout = () => {
    dispatch({
      type: 'SET_TOKEN',
      token: null
    })
    localStorage.clear();
    history.push('/');

  }
  useEffect(async () => {
    if (localStorage.getItem('uid')) {
      getUser()
    }
  }, [user.profileUrl])

  async function getUser() {
    const options = {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    }
    const resp = await fetch(ACC + "/" + localStorage.getItem('uid'), options);
    const respData = await resp.json();
    setUser(respData);
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  useEffect(async () => {
    if (file) {
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          storage.ref("images").child(file.name).getDownloadURL()
            .then(async (url) => {
              const data = {
                url: url
              }

              const options = {
                method: 'PUT',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(data)
              }

              if (localStorage.getItem('uid')) {
                const resp = await fetch(ACC + "/" + localStorage.getItem('uid'), options);
                const respData = await resp.json();
                console.log(respData)
                getUser()
                window.location.reload();
              }

            })
          setProgress(0)
        }
      )
    }
  }, [file])

 
  const editProfile = () => {
    history.push('/account')
  }

  const notes = () => {
    history.push('/notes')
  }

  console.log(user);

  return (

    <>
      <div className="account_leftTop">
        <Avatar src={user?.profileUrl || "broken"} className='profileAvatar' alt={user?.username?.toUpperCase()} />
        {
          progress > 0 && (<progress value={progress} max="100">{progress}</progress>)
        }
        <h3>{user.username}</h3>
        <p>{user.email}</p>
        {
          user.paid && (<p className='vip'>VIP</p>)
        }
      </div>
      <Fade left>
      <div className="accountLeft_body">
        <div className="option" onClick={notes}>
          <ListAlt className='accicons' />
          <h3>Notes</h3>
        </div>
    
        <div className="option" onClick={editProfile}>
          <Edit className='accicons' />
          <h3>Edit Profile</h3>
        </div>
        <div className="option">
          <AddAPhoto className='accicons' />
          <input type="file" onChange={handleChange} className='fileinput' />
        </div>
        <Button variant='contained' fullWidth className='logout' onClick={logout}>Logout</Button>
      </div>
      </Fade>
    </>
  )
}

export default Sidebar
