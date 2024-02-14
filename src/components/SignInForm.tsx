import { ActivityIndicator, View } from "react-native"

import { AuthForm as AuthFormT } from "../types/auth.types"
import Button from "./Button"
import Input from "./Input"
import { useForm } from "react-hook-form"

const AuthForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<AuthFormT>()

  const onSubmit = async (data: AuthFormT) => {
    await new Promise(() => {
      setTimeout(() => {
        console.log(data)
      }, 4000)
    }).then(() => {
      console.log("Terminó el timeout")
    })
  }
  console.log("isSubmitting", isSubmitting)

  return (
    <View className="flex w-full px-16" style={{ gap: 32 }}>
      <Input
        control={control}
        name="username"
        placeholder="Usuario"
        minLength={4}
      />
      <Input
        control={control}
        name="password"
        placeholder="Contraseña"
        minLength={4}
        isPassword
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        variant="lg"
        icon={
          isSubmitting && <ActivityIndicator size={"large"} color={"white"} />
        }
      >
        Iniciar Sesión
      </Button>
    </View>
  )
}

export default AuthForm
