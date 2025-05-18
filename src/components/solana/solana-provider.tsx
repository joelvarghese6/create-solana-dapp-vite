'use client'

import { WalletError } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider, } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { type ReactNode, useCallback, useMemo } from 'react'
import { useCluster } from '@/components/cluster/cluster-data-access'

import '@solana/wallet-adapter-react-ui/styles.css'

//export const WalletButton = async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton;

export function SolanaProvider({ children }: { children: ReactNode }) {
    const { cluster } = useCluster()
    const endpoint = useMemo(() => cluster.endpoint, [cluster])
    const onError = useCallback((error: WalletError) => {
        console.error(error)
    }, [])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} onError={onError} autoConnect={true}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}
