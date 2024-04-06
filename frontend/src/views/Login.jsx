
import LogoBIzWIz from "@components/icons/LogoBIzWIz";
import Buttondynamic from "@components/Buttondynamic";
import InputComponents from "@components/InputComponents";
export default function Login() {
  return (
    <div
      className="h-screen bg-white  pt-12 
    flex flex-col items-center gap-12 justify-between"
    >
      <section>
        <LogoBIzWIz color="" />
      </section>

      <div
        className="rounded-tr-[100px] rounded-b-[50px] bg-gradient-to-b from-degraded-v-start to-degraded-h-end py-12 px-4 h-full
      flex items-center flex-col w-[101%]"
      >
        <section className="mb-4 text-white text-center">
          <h6 className="font-black text-xl">Iniciar sesión</h6>
          <p className="text-[14px] opacity-75">Inicia en tu cuenta en BizWiz</p>
        </section>

        <form
          className="flex flex-col gap-3 w-full  text-[#717171]"
          action=""
          method=""
        >
          <InputComponents place="Correo Electronico" type="email" />
          <InputComponents place="Contraseña" type="password" />
          
        </form>

        <Buttondynamic
          name="Iniciar Sesion"
          name2="Crear Cuenta"
          to="/login"
          to2="/createuser"
        />
      </div>
    </div>
  )
}
