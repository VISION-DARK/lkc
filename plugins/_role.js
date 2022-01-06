const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Bocil': 0,
  'Bocil#2': 10,
  'Pemula': 20,
  'Baru belajar': 30,
  'Ahli': 40,
  'Sepuh': 50,
  'Guru': 60,
  'Raja': 80,
  'Dewa': 90
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
