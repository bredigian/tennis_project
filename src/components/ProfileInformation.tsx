import { Text, View } from "react-native"

import { User } from "@/types/user.types"

const ProfileInformation = ({ user }: { user: User }) => {
  return (
    <View className="flex flex-col bg-white p-4 rounded-xl" style={{ gap: 12 }}>
      <View className="flex flex-col items-start border-b-[1px] pb-2 border-b-gray-100">
        <Text className="text-sm text-primary-dark">Nombre</Text>
        <Text className="text-primary-normal text-lg font-medium">
          {user?.name}
        </Text>
      </View>
      <View className="flex flex-col items-start border-b-[1px] pb-2 border-b-gray-100">
        <Text className="text-sm text-primary-dark">Usuario</Text>
        <Text className="text-primary-normal text-lg font-medium">
          {user?.username}
        </Text>
      </View>
      <View className="flex flex-col items-start border-b-[1px] pb-2 border-b-gray-100">
        <Text className="text-sm text-primary-dark">Correo Electrónico</Text>
        <Text className="text-primary-normal text-lg font-medium">
          {user?.email}
        </Text>
      </View>
      <View className="flex flex-col items-start">
        <Text className="text-sm text-primary-dark">ID</Text>
        <Text className="text-primary-normal text-lg font-medium">
          {user?.id}
        </Text>
      </View>
    </View>
  )
}

export default ProfileInformation
