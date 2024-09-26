import userData from "../fixtures/User.json"
import Navigation from "../support/navigation"

const navigation = new Navigation()
const user = userData.DataUser1

describe('Login', () => {
  it('Berhasil login', () => {
    cy.homepage()
    navigation.inputNama(user.usern)
    navigation.inputSandi(user.users)
    navigation.inputButton()
    navigation.inputbaju()
    navigation.inputbike()
    navigation.inputcart()
    navigation.inputco()
    navigation.inputFname(user.firstname)
    navigation.inputLname(user.lastname)
    navigation.inputcode(user.codec)
    navigation.inputConti()
    navigation.inputFinish()
    navigation.inputBack()

  })

})