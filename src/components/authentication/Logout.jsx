
import { doLogout } from "@/app/actions"
import { Button } from "../ui/button"

export default function Logout() {
  return (
    <form action={ doLogout }>
        <Button type="submit">Logout</Button>
    </form>
  )
}
