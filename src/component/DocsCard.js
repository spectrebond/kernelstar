import { Button, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import React, { useState } from 'react'
import { useStateValue } from '../StateProvider';
import Tilty from 'react-tilty';

import './DocsCard.css'
function DocsCard({ topic, subtopic, url }) {
  const [open, setOpen] = useState(false);
  const [coinshas, setCoinHas] = useState(false);

  const [{ coins }, dispatch] = useStateValue();

  const close = () => {
    setOpen(false)
  }

  const acc = 'https://kernelbackend.herokuapp.com/api/user/account/';




  const openModal = async () => {
    setOpen(true)
  }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className='docsCard'>
        <h2>{topic}</h2>
        <h3>{subtopic}</h3>
        <Button className='viewBtn' variant='contained' onClick={openModal}>View</Button>
      </div>
      {
        open && (
          <div className="docModal" onContextMenu={(e) => e.preventDefault()}>
            <div className="doccontainer">

              


              <iframe src={url + "#toolbar=0"} style={{height: '100vh', width: '80vw'}}></iframe>

              <IconButton className='closeDoc'>
                <Close onClick={close} />
              </IconButton>
            </div>
          </div>
        )
      }
    </>
  )
}

export default DocsCard
