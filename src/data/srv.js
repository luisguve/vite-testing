const srvAddr = import.meta.env.DEV ?
"http://localhost:8000"
  :
"https://dolaroid.herokuapp.com"

export default srvAddr;