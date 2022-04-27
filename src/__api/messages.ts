import { useMutation } from 'react-query'

import api from './index'

import { Message } from './types'

const sendMessage = async (message: Message) => {
	const { data } = await api.post('/messages', message)
	return data as Message
}
export function useSendMessageMutation() {
	return useMutation(sendMessage)
}
