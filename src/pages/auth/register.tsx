import React from 'react';
import { Link } from 'react-router-dom';
import { FormField, Button, Form, Message, Select, Divider } from 'semantic-ui-react';

export default function RegisterPage() {
    const [successMessage, setSuccessMessage] = React.useState<string | null>(null);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

    const roleOptions = [
        { key: 'student', text: 'Etudiant', value: 'etudiant' },
        { key: 'teacher', text: 'Enseignant', value: 'enseignant' },
    ]


    return (
        <div className='h-screen w-full grid place-content-center'>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient" />
            <div className="absolute inset-0 flex items-center justify-center"> */}
            <Form>
                <form action="" className='w-[420px] space-y-6 shadow-lg border-2 rounded-md p-6'>
                    <h2 className='mb-10 font-bold'>Inscription</h2>
                    <FormField>
                        <label className='text-secondary'>Nom Complet</label>
                        <input className='border focus:border-primary' placeholder='John Doe' />
                    </FormField>
                    <FormField>
                        <label className='text-secondary'>Email</label>
                        <input className='border focus:border-primary' placeholder='johndoe@example.xyz' />
                    </FormField>
                    <FormField options={roleOptions}>
                        <label className='text-secondary'>Sélectionner un role</label>
                        <Select placeholder='Qui etes-vous ?' defaultValue={''} options={roleOptions} />
                    </FormField>
                    <FormField>
                        <label>Créer un mot de passe</label>
                        <input type='password' className='border focus:border-primary' placeholder='*********' />
                    </FormField>
                    <FormField>
                        <label>Confirmation</label>
                        <input type='password' className='border focus:border-primary' placeholder='*********' />
                    </FormField>

                    <Divider />

                    <div className='space-y-4 mt-10'>
                        <Link to='/auth/finalisation'>
                            <Button type='submit' size='small' className='w-full mt-10' color='green'>S'inscrire</Button>
                        </Link>
                        <br /><br />
                        <Link to='/auth/connexion'>
                            <Button type='submit' size='small' className='w-full mt-10'>
                                Se connecter
                            </Button>
                        </Link>
                    </div>

                    <Message
                        success
                        header='Form Completed'
                        content="You're all signed up for the newsletter"
                    />
                </form>
            </Form>
            {/* </div> */}
        </div>
    )
}
