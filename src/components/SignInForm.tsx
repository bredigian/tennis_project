import { ActivityIndicator, Alert, View } from "react-native"

import { AuthForm as AuthFormT } from "@/types/auth.types"
import Button from "./Button"
import Input from "./Input"
import { useForm } from "react-hook-form"
import { useUserStore } from "@/store/user.store"

const AuthForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<AuthFormT>()

  const { signin } = useUserStore()

  const onSubmit = async (data: AuthFormT) => {
    try {
      await signin(data)
    } catch (error: any) {
      Alert.alert("¡Ocurrió un error!", error.message as string)
    }
  }

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
