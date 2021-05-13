// 账号密码验证码定义
const loginPassEvent = (store) => {
  const router = useRouter()
  const codeImg = ref('123')
  const formRef = ref<null | HTMLElement>(null)
  const codeRef = ref<HTMLElement | null>(null)
  const form = reactive<User>({
      user: '',
      password: '',
      code: '',
  })
  const validateCode = (rule, value, callback) => {
      if (!value) {
          callback(new Error('请输入验证码'))
      } else if (value.toLowerCase() !== codeImg.value.toLowerCase()) {
          callback(new Error('验证码输入错误'))
      }
      callback()
  }
  const rules = reactive<Rule>({
      user: [{required: true, message: '请输入账号', trigger: 'blur'}],
      password: [{required: true, message: '请输入密码', trigger: 'blur'}],
      code: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {validator: validateCode, trigger: 'blur'},
      ],
  })
  const loginIn = () => {
      (formRef.value as any).validate((valid) => {
          if (!valid) {
              if (codeRef.value) {
                  (codeRef.value as any).refresh()
              }
              return
          }
          // 验证完成，发送登录请求，获取token
          store.commit('base/SET_TOKEN', 'tokenVal')
          store.dispatch('base/getMenu').then(() => {
              router.push('/')
          })
      })
  }
  return {codeImg, form, rules, loginIn, formRef, codeRef}
}
// 第三方登录
const threeLoginEvent = () => {
  const handleClick = (thirdpart) => {
      let appid, clientId, url
      const redirectUri = encodeURIComponent(
          window.location.origin + '/#/authredirect'
      )
      if (thirdpart === 'wechat') {
          appid = 'xxxx'
          url =
              'https://open.weixin.qq.com/connect/qrconnect?appid=' +
              appid +
              '&redirect_uri=' +
              redirectUri +
              '&state=WX&response_type=code&scope=snsapi_login#wechat_redirect'
      } else if (thirdpart === 'tencent') {
          clientId = 'xxxx'
          url =
              'https://graph.qq.com/oauth2.0/authorize?response_type=code&state=QQ&client_id=' +
              clientId +
              '&redirect_uri=' +
              redirectUri
      }
      openWindow(url, thirdpart, 540, 540)
  }
  return {handleClick}
}
//   获取主题色
const colorEvent = (store) => {
  const color = computed(() => {
      return store.getters['base/colorStyle']
  })
  const colorStyle = ref(color.value)
  return {colorStyle}
}


export default loginPassEvent 