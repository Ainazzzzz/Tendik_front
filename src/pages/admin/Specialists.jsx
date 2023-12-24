import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IconButton, InputAdornment, styled } from '@mui/material'

import {
   deleteDoctorThunk,
   doctorsAllThunk,
   doctorsSearchThunk,
   spesialistThunk,
   statusDoctorThunk,
} from '../../store/spesialist/spesialistThunk'
import SwitchApp from '../../components/UI/switch/Switch'
import { EditIcon, SearchIcon, TrashIcon } from '../../assets'
import AppTable from '../../components/UI/AppTable'
import { Input } from '../../components/UI/input/Input'
import Button from '../../components/UI/Button'

export const Specialists = () => {
   const navigate = useNavigate()
   const { doctors } = useSelector((state) => state.doctors)
   const dispatch = useDispatch()
   const [searchTerm, setSearchTerm] = useState('')
   // const [isStatus, setIsStatus] = useState(false)

   const handleEditClick = (doctorId) => {
      dispatch(spesialistThunk(doctorId))
   }

   useEffect(() => {
      dispatch(doctorsAllThunk())
   }, [dispatch])

   const handleDeleteClick = (doctorId) => {
      dispatch(deleteDoctorThunk(doctorId))
   }

   useEffect(() => {
      dispatch(doctorsSearchThunk(searchTerm))
   }, [searchTerm, dispatch])

   const handleSearch = (event) => {
      setSearchTerm(event.target.value)
      dispatch(doctorsSearchThunk(event.target.value))
   }

   const handleStatusChange = (e, id) => {
      let status
      doctors.map((el) => {
         if (el.id === id) {
            status = e.target.checked
         }
         return el
      })
      dispatch(statusDoctorThunk({ value: status, doctorId: id }))
   }

   // const handleStatus = (event, doctorId) => {
   //    dispatch(statusDoctorThunk({ doctorId, value: event.target.checked }))
   // }

   const handleAddSpecialistClick = () => {
      navigate('/doctor-details')
   }

   const image = 'image'
   const firstName = 'firstName'
   const lastName = 'lastName'
   const position = 'position'
   const scheduleUntil = 'scheduleUntil'
   const columns = [
      { id: 'id', label: '№' },
      {
         id: 'isActive',
         render: (item) => (
            <th>
               <SwitchApp
                  checked={item?.isActive}
                  onChange={(event) => handleStatusChange(event, item.id)}
               />
            </th>
         ),
         label: 'Статус',
      },
      {
         id: 'doctor',
         render: (item) => (
            <th>
               <ContainerDoctor switchApp={item.isActive}>
                  <img src={item[image]} alt="img" />
                  <div>
                     <p className="nameStyle">
                        {item[firstName]} {item[lastName]}
                     </p>
                     <p className="positionStyle">{item[position]}</p>
                  </div>
               </ContainerDoctor>
            </th>
         ),
         label: 'Специалист',
      },
      { id: 'departmentName', label: 'Отделение' },
      { id: scheduleUntil ? 'scheduleUntil' : '-', label: 'Расписание до' },
      {
         id: 'action',
         render: (item) => (
            <IconStyle>
               <div>
                  <Link to={`/specialists/doctor-details/${item.id}`}>
                     <EditIcon
                        onClick={() => navigate(handleEditClick(item.id))}
                     />
                  </Link>
               </div>
               <div>
                  <TrashIcon onClick={() => handleDeleteClick(item.id)} />
               </div>
            </IconStyle>
         ),
         label: 'Действия',
      },
   ]

   return (
      <ContainerMain>
         <Container>
            <Block>
               <p>Специалисты</p>
               <Link to="/specialists/doctor-add">
                  <ButtonStyle
                     onClick={() => navigate(handleAddSpecialistClick)}
                  >
                     +Добавить специалиста
                  </ButtonStyle>
               </Link>
            </Block>
            <InputStyle
               placeholder="Поиск"
               value={searchTerm}
               onChange={handleSearch}
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">
                        <IconButton>
                           <SearchIcon />
                        </IconButton>
                     </InputAdornment>
                  ),
               }}
            />
            <ContainerApp>
               <AppTable columns={columns} data={doctors} />
            </ContainerApp>
         </Container>
      </ContainerMain>
   )
}

const Container = styled('div')`
   padding: 4vh 3%;
   text-align: start;
`
const ContainerMain = styled('div')`
   tr {
      border-bottom: 1px solid #d9d9d9;
   }
   .css-dmmspl-MuiFormGroup-root {
      margin-left: 0.9rem;
   }
   thead:first-of-type > .css-13wgndv-MuiTableRow-root {
      /* background-color: red; */
      th:nth-of-type(-n + 0) {
         text-align: start;
      }

      th:nth-of-type(-n + 1) {
         text-align: start;
         padding-right: 3rem;
      }

      th:nth-of-type(-n + 2) {
         text-align: start;
      }

      th:last-of-type {
         text-align: end;
         margin-bottom: 30px;
      }

      th:nth-of-type(-n + 1) {
         width: 30px;
      }
   }
   background-color: #f5f5f5;
   height: max-content;
`
const ContainerApp = styled('div')`
   background-color: #fff;
   height: max-content;
`

const Block = styled('div')`
   display: flex;
   justify-content: space-between;
   text-align: center;
   align-items: center;
   margin-bottom: 4vh;
   p {
      font-size: 22px;
      font-weight: 400;
   }
`

const InputStyle = styled(Input)(() => ({
   '.MuiOutlinedInput-root': {
      borderRadius: '25px',
      width: '35rem',
      height: '2.1rem',
      backgroundColor: '#fff',
   },
   fieldset: {
      border: 'none',
   },
}))

const ButtonStyle = styled(Button)(() => ({
   width: '17rem',
   height: '2.4rem',
}))

const ContainerDoctor = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: '0.5rem',

   '& img': {
      width: '2.3rem',
      height: '2.3rem',
      borderRadius: '2.3rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },

   '& div': {
      width: '11rem',
      height: '4rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      textAlign: 'center',
   },

   '& .nameStyle': {
      fontSize: '1rem',
      width: 'max-width',
      textAlign: 'start',
      fontWeight: '500',
   },

   '& .positionStyle': {
      fontSize: '0.8rem',
      fontWeight: '400',
   },
}))

const IconStyle = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
   marginRight: '1rem',
   marginTop: '1.25rem',
   justifyContent: 'flex-end',
   '& div': {
      cursor: 'pointer',
   },
}))
