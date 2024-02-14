import { Control, UseFormRegister, useController } from "react-hook-form"
import { KeyboardType, Text, TextInput, View } from "react-native"

import { AuthForm } from "@/types/auth.types"

const Input = ({
  placeholder,
  isPassword,
  name,
  control,
  minLength,
  keyboardType,
}: {
  control: Control<AuthForm>
  placeholder: string
  isPassword?: boolean
  name: keyof AuthForm
  minLength?: number
  keyboardType?: KeyboardType
}) => {
  const {
    field,
    formState: { errors },
  } = useController<AuthForm>({
    control,
    name: name,
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Este campo es requerido.",
      },
      minLength: {
        value: minLength as number,
        message: `Debe tener al menos ${minLength} caracteres.`,
      },
    },
  })
  return (
    <View>
      <TextInput
        className="bg-gray-200 w-full py-2 px-4 rounded-xl"
        placeholder={placeholder}
        secureTextEntry={isPassword}
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        keyboardType={keyboardType}
      />
      <Text className="text-red-500 font-medium text-sm px-2">
        {errors[name]?.message}
      </Text>
    </View>
  )
}

export default Input
