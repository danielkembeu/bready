// import React from 'react';
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Button,
} from 'semantic-ui-react'

export default function SheetCard() {
    return (
        <Card>
            <Image
                src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
                wrapped
                rounded
            />
            <CardContent>
                <CardHeader>Daniel</CardHeader>
                <CardDescription>
                    Daniel is a comedian living in Nashville.
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Button color='green'>Voir</Button>
                <Button>Télécharger</Button>
            </CardContent>
        </Card>
    )
}