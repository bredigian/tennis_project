import { Alert, Modal, Text, View } from "react-native"

import Button from "@/components/Button"
import ProfileInformation from "@/components/ProfileInformation"
import Title from "@/components/Title"
import { User } from "@/types/user.types"
import { useUserStore } from "@/store/user.store"

const Profile = () => {
  const { user, signout } = useUserStore()

  const logout = async () => {
    try {
      await signout()
    } catch (error: any) {
      Alert.alert("Error", error.message as string)
    }
  }

  return (
    <View className="flex flex-col p-6" style={{ gap: 32 }}>
      <Title variant="transparent">Mi perfil</Title>
      <ProfileInformation user={user as User} />
      <Button onPress={logout} variant="lg">
        Cerrar Sesión
      </Button>
    </View>
  )
}

export default Profile
