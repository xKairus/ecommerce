"use client"

import { Modal } from "@/app/(customerFacing)/modal"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode, useState } from "react"

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-center px-4">
      {children}
    </nav>
  )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname()
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  )
}

export function AdminButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <button
        className="bg-red-500 hover:bg-red-700 text-white p-4 absolute right-10"
        onClick={openModal}
      >
        Admin
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-semibold text-black mb-4 text-center">Admin Panel</h2>
        <p className="text-black">
          To access the Admin Panel, please enter the following credentials:
        </p>
        <ul className="text-black mt-2">
          <li>
            <strong>Login:</strong> admin
          </li>
          <li>
            <strong>Password:</strong> admin
          </li>
        </ul>
      </Modal>
    </>
  )
}
