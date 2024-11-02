/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"




export default function Protected ({children, authentication=true}) {
  const navigate = useNavigate()
  const [laoder, setLoader  ] = useState(true)
  const authStatus = useSelector(state => state.auth.status)

  useEffect(() => {
    // TODO : make it easy to read
    if (authentication && authStatus !== authentication ){
      navigate("/login")
    } else if ( !authentication && authStatus !== authentication){
      navigate("/")
    }
    // setLoader to false once the authentication check is complete
    setLoader(false)
  }, [authStatus, navigate, authentication])


  return laoder ? <h1>Loading...</h1> : {children}
}