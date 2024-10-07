"use client"
import Link from "next/link"
import { ReactNode } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg relative">
        {children}
        <div className="flex justify-center space-x-4 mt-4">
          {/* Кнопка для логина */}
          <Link href="/admin">
            <button className="w-40 bg-red-500 text-white p-2 rounded hover:bg-red-600">
              Log In
            </button>
          </Link>

          {/* Кнопка для закрытия модального окна */}
          <button
            className="w-40 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            onClick={onClose}
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  )
}
