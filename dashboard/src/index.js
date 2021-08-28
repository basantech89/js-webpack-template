import('UserApp/Avatar').then(AvatarModule => {
  const Avatar = AvatarModule.default
  const avatar = new Avatar()
  avatar.render('John Doe')
})

import('UIApp/Typography').then(TypographyModule => {
  const Typography = TypographyModule.default
  const typography = new Typography()
  typography.render()
})

