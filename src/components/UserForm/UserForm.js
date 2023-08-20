import { Controller, useForm } from 'react-hook-form';
import { Heading1, Heading3 } from '../styledComponents/Typography';
import {
  DisabledFormButton,
  Check,
  ErrorMessageStyled,
  Form,
  FormButton,
  FormField,
  Input,
  Label,
  Select,
} from '../styledComponents/Form';
import Loading from '../Loading/Loading';

const ErrorMessage = ({ error }) => {
  return error && <ErrorMessageStyled>{error.message}</ErrorMessageStyled>;
};

/**
 * UserForm takes 2 argument.
 * The return is a form to fullfil user data.
 * @param {[String]} price - Room price
 * @param {Function} onSubmit - On submit form callback function
 * @param {boolean} isUpdatingUserSelector - loadding button indicator
 */
const UserForm = ({ price, onSubmit, isUpdatingUserSelector }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      concern: '',
    },
  });

  return (
    <>
      <Heading3> Tus datos </Heading3>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: { value: true, message: 'Nombre es requerido' },
            }}
            render={({ field }) => (
              <Input
                {...field}
                $error={errors.firstName}
                id="firstName"
                placeholder="Inserte su nombre"
              />
            )}
          />
          <Label htmlFor="firstName">Nombre</Label>
          <ErrorMessage error={errors.firstName} />
        </FormField>

        <FormField>
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: { value: true, message: 'Apellido es requerido' },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="lastName"
                $error={errors.lastName}
                placeholder="Inserte su apellido"
              />
            )}
          />
          <Label htmlFor="lastName">Apellido</Label>
          <ErrorMessage error={errors.lastName} />
        </FormField>

        <FormField>
          <Controller
            name="email"
            control={control}
            rules={{
              required: { value: true, message: 'Email es requerido' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Formato incorrecto',
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                $error={errors.email}
                placeholder="Inserte su email"
                id="email"
              />
            )}
          />
          <ErrorMessage error={errors.email} />
          <Label htmlFor="email">Email</Label>
        </FormField>

        <FormField>
          <Controller
            name="country"
            control={control}
            rules={{ required: { value: true, message: 'Pais es requerido' } }}
            render={({ field }) => (
              <Select $error={errors.country} id="country" {...field}>
                <option value="">Seleccione un país</option>
                <option value="España">España</option>
                <option value="Francia">Francia</option>
                <option value="Italia">Italia</option>
              </Select>
            )}
          />
          <Label htmlFor="country">País</Label>
          <ErrorMessage error={errors.country} />
        </FormField>

        <FormField $height={'40px'}>
          <Controller
            name="concern"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Aceptar los términos y condiciones es requerido',
              },
            }}
            render={({ field }) => (
              <Check
                type="checkbox"
                id="concern"
                $error={errors.concern}
                {...field}
              />
            )}
          />
          <label htmlFor="concern">Acepto los términos y condiciones</label>
        </FormField>

        <div>
          <Heading3 $align="right">Total</Heading3>
          <Heading1 $align="right">$ {price}</Heading1>
        </div>

        {!isUpdatingUserSelector ? (
          <FormButton type="submit">Reservar</FormButton>
        ) : (
          <DisabledFormButton disabled>
            <Loading light={true} height={'20px'} />
          </DisabledFormButton>
        )}
      </Form>
    </>
  );
};
export default UserForm;
