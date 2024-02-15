import { ActivityIndicator, Alert, Text, View } from "react-native"

import Button from "@/components/Button"
import Modal from "react-native-modal"
import ProfileInformation from "@/components/ProfileInformation"
import Title from "@/components/Title"
import { User } from "@/types/user.types"
import { useState } from "react"
import { useUserStore } from "@/store/user.store"

const Profile = () => {
  const { user, signout } = useUserStore()
  const [activeModal, setActiveModal] = useState(false)
  const [signingOut, setSigningOut] = useState(false)

  const handleActiveModal = () => {
    setActiveModal(!activeModal)
  }

  const logout = async () => {
    setSigningOut(true)
    try {
      await signout()
    } catch (error: any) {
      Alert.alert("¡Ocurrió un error!", error.message as string)
    }
    setSigningOut(false)
  }

  return (
    <View className="flex flex-col p-6" style={{ gap: 32 }}>
      <Title variant="transparent">Mi perfil</Title>
      <ProfileInformation user={user as User} />
      <Button
        onPress={handleActiveModal}
        variant="lg"
        backgroundColor="bg-primary-dark"
      >
        Cerrar Sesión
      </Button>
      <Modal
        isVisible={activeModal}
        onBackdropPress={handleActiveModal}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        style={{ margin: 0, justifyContent: "flex-end" }}
      >
        <View
          className="flex flex-col items-center bg-white p-6"
          style={{ gap: 12 }}
        >
          <Text className="text-2xl text-center text-primary-dark font-bold">
            ¿Estas seguro que deseas cerrar sesión?
          </Text>
          <View className="flex flex-row" style={{ gap: 12 }}>
            <Button
              width="w-1/2"
              variant="lg"
              onPress={handleActiveModal}
              backgroundColor="bg-transparent"
            >
              Cancelar
            </Button>
            <Button
              backgroundColor="bg-primary-dark"
              width="w-1/2"
              variant="lg"
              onPress={logout}
              icon={
                signingOut && (
                  <ActivityIndicator size={"small"} color={"white"} />
                )
              }
            >
              Cerrar Sesión
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Profile
