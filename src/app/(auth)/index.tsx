import { Image, Text, View } from "react-native"

import { Link } from "expo-router"
import SignInForm from "../../components/SignInForm"

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center" style={{ gap: 32 }}>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <SignInForm />
      <Link
        className="underline text-primary-normal font-semibold"
        href={"/sign-up"}
      >
        ¿Todavía no estás registrado? Hacelo desde acá!
      </Link>
    </View>
  )
}

export default SignIn
