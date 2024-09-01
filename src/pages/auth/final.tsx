import React from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { Form, FormField, Divider, Button, Message, Select } from "semantic-ui-react";
import { unites } from '../../utils/data/units';
import { specialites } from "../../utils/data/specialites";

export default function FinalAuthPage() {

    React.useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, []);




    return (
        <div className="grid place-content-center w-screen h-screen">
            <Form>
                <form className='w-[420px] space-y-6 shadow-lg border-2 rounded-md p-6'>
                    <h2 className='mb-10 font-bold'>Dites nous plus !</h2>
                    <FormField>
                        <label className='text-secondary'>Quelle est votre spécialité ?</label>
                        <Select
                            options={specialites}
                            search
                            className='border focus:border-primary'
                            defaultValue='genie_logiciel'
                            placeholder='Ex: Marketing, Réseau & Téle-communication...'
                        />
                    </FormField>

                    <FormField>
                        <label className='text-secondary'>Unité d'enseignements</label>
                        <Select
                            search
                            options={unites}
                            className='border focus:border-primary'
                            defaultValue=''
                            placeholder='Ex: Algèbre linéaire, Base de données...'
                        />
                    </FormField>


                    <Divider />

                    <div className='space-y-4 mt-10'>
                        <Link to='/app/'>
                            <Button size='small' className='w-full mt-10' color='green'>
                                Terminer l'inscription
                            </Button>
                        </Link>

                        <br /><br />

                        <Link to='/auth/inscription'>
                            <Button type='submit' size='small' className='w-full mt-10'>
                                Retour
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
