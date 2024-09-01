import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormField, Button, Form, Message, Divider } from 'semantic-ui-react';

export default function LoginPage() {
    const [successMessage, setSuccessMessage] = React.useState<string | null>(null);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

    const router = useNavigate();

    return (
        <div className='h-screen w-full grid place-content-center'>
            <Form>
                <form className='w-[420px] space-y-6 shadow-lg border-2 rounded-md p-6'>
                    <h2 className='mb-10 font-bold'>Connexion</h2>
                    <FormField>
                        <label className='text-secondary'>Email</label>
                        <input className='border focus:border-primary' placeholder='johndoe@example.xyz' />
                    </FormField>
                    <FormField>
                        <label>Mot de passe</label>
                        <input className='border focus:border-primary' placeholder='**********' />
                    </FormField>

                    <Divider />

                    <div className='space-y-4 mt-10'>
                        <Button size='small' className='w-full mt-10' color='green'>
                            Se connecter
                        </Button>
                        
                        <br /><br />

                        <Link to='/auth/inscription'>
                            <Button type='submit' size='small' className='w-full mt-10'>
                                Créer un compte
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
        </div>
    )
}
