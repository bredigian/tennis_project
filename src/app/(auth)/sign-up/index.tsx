import { Image, Text, View } from "react-native"

import SignUpForm from "../../../components/SignUpForm"

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center" style={{ gap: 32 }}>
      <Image
        source={require("../../../assets/logo.png")}
        style={{ width: 140, height: 140 }}
        resizeMode="contain"
      />
      <SignUpForm />
    </View>
  )
}

export default SignUp
