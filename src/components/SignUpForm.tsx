import { ActivityIndicator, View } from "react-native"

import { AuthForm as AuthFormT } from "../types/auth.types"
import Button from "./Button"
import { COLORS } from "../themes/colors"
import Input from "./Input"
import { useForm } from "react-hook-form"
import { useState } from "react"

const AuthForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<AuthFormT>()

  const onSubmit = (data: AuthFormT) => {
    console.log(data)
  }

  return (
    <View className="flex w-full px-16" style={{ gap: 16 }}>
      <Input
        control={control}
        name="name"
        placeholder="Nombre y Apellido"
        minLength={6}
      />
      <Input
        control={control}
        name="email"
        placeholder="Correo Electrónico"
        minLength={8}
        keyboardType="email-address"
      />
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
          isSubmitting && (
            <ActivityIndicator size={"large"} color={COLORS.INACTIVE} />
          )
        }
      >
        Registrarse
      </Button>
    </View>
  )
}

export default AuthForm
