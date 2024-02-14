import {
  Button,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
} from "react-native"

import { COLORS } from "@/themes/colors"

const Login = () => {
  return (
    <KeyboardAvoidingView behavior="height" enabled>
      <View className="flex items-center justify-center gap-6">
        <Image
          style={{
            width: 200,
            height: 200,
            objectFit: "contain",
          }}
          source={require("../assets/logo.png")}
        />
        <Text className="text-2xl text-primary-normal font-bold">
          Autenticación
        </Text>
        <TextInput
          className="text-sm font-semibold w-64 text-primary-normal"
          style={{ borderBottomWidth: 2, borderColor: COLORS.PRIMARY }}
          placeholder="Usuario"
          placeholderTextColor={COLORS.PRIMARY}
          autoComplete="username"
          autoCapitalize="none"
        />
        <TextInput
          className="text-sm font-semibold w-64 text-primary-normal"
          style={{ borderBottomWidth: 2, borderColor: COLORS.PRIMARY }}
          placeholder="Contraseña"
          placeholderTextColor={COLORS.PRIMARY}
          secureTextEntry={true}
          autoComplete="off"
        />
        <View>
          <Button
            onPress={() => {}}
            title="Iniciar Sesión"
            color={COLORS.PRIMARY}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login
