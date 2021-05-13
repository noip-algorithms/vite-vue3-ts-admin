import { dateFormat } from '../../../utils/date'
// 时间相关
const timeEvent = () => {
  let time = ''
  const getTime = () => {
      time = dateFormat(new Date())
  }
  getTime()
  // 定时调用时间
  const timer = setInterval(() => {
      getTime()
  }, 1000)
  console.log(time);
  
  return time
}

export default timeEvent