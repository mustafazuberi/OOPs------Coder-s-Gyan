class Config{
  static #dbUser = 'username'
  static dbPassword = 'secret '
  static apiToken = 'abcd'

  static get dbUser () {
    return this.#dbUser
  }
}  
console.log(Config.dbUser)


class User {
  static userId = 1

  static cache = {
    1: 'some value'
  }

  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.userId++
  }

  static{
    console.log('initialized')
  }

  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }
  
  static compareByIncome(user1, user2) {
    return user1.income - user2.income;
  }

  static checkCache(){  
    console.log(this.cache)
  }

  static hasInCache(){
    this.checkCache()
  }
}

const user1 = new User("Mustafa", 22, 5000);
const user2 = new User("Ahmed", 43, 10000);
const user3 = new User("Ishaq", 33, 7000);


const users = [user1, user2, user3];
users.sort(User.compareByAge);
users.sort(User.compareByIncome);
console.log(users);

User.hasInCache()
 