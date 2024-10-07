"use client";

import { useEffect, useState } from "react";
import EditUser from "@/components/Users/EditUser";

export default function Edit() {
    const [userId, setUserId] = useState<string | undefined>(undefined);

    useEffect(() => {
        const { searchParams } = new URL(window.location.href);
        const id = searchParams.get("id");
        setUserId(typeof id === 'string' ? id : undefined); // Establece el ID en el estado
    }, []); // Solo se ejecuta una vez al montar el componente

    return (
        <>
            <EditUser userId={userId} /> {/* Pasa el ID al componente */}
        </>
    );
}
