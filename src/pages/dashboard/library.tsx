// import React from 'react'
import { useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbSection, BreadcrumbDivider } from "semantic-ui-react";

export default function LibraryPage() {
    const router = useNavigate();
    return (
        <>
            <Breadcrumb>
                <BreadcrumbSection link onClick={() => router('/app/', {
                    relative: 'path',
                    replace: true
                })}>Accueil</BreadcrumbSection>
                <BreadcrumbDivider />
                <BreadcrumbSection link active>Bibliotheque</BreadcrumbSection>
            </Breadcrumb>
            <div className="p-20">
                Librairie
            </div>
        </>
    )
}
