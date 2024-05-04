import { Role, PizzaService, User, Menu, OrderHistory, Pizza, Order, Franchise, Store, OrderItem } from './pizzaService';

const pizzaMenu: Menu = [
  { id: '11111111-1111-1111-1111-111111111111', title: 'Veggie', description: 'A garden of delight', image: 'pizza1.png', price: 0.0038 },
  { id: '22222222-2222-2222-2222-222222222222', title: 'Pepperoni', description: 'Spicy treat', image: 'pizza2.png', price: 0.0042 },
  { id: '33333333-3333-3333-3333-333333333333', title: 'Margarita', description: 'Essential classic', image: 'pizza3.png', price: 0.0014 },
  { id: '44444444-4444-4444-4444-444444444444', title: 'Crusty', description: 'A dry mouthed favorite', image: 'pizza4.png', price: 0.0024 },
  { id: '55555555-5555-5555-5555-555555555555', title: 'Flat', description: 'Something special', image: 'pizza5.png', price: 0.0028 },
  { id: '66666666-6666-6666-6666-666666666666', title: 'Chared Leopard', description: 'For those with a darker side', image: 'pizza6.png', price: 0.0099 },
];

class MemoryPizzaService implements PizzaService {
  users: User[] = [
    { id: '12345678-1234-4abc-9def-123456789abc', name: 'Rajah Singh', email: 'f@jwt.com', password: 'a', roles: [{ objectId: 'e7b6a8f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f', role: Role.Franchisee }] },
    { id: '87654321-4321-4def-9abc-987654321def', name: 'Zara Ahmed', email: 'a@jwt.com', password: 'a', roles: [{ role: Role.Admin }] },
    { id: 'abcdef12-34ab-4def-9abc-abcdef123456', name: 'Kai Chen', email: 'd@jwt.com', password: 'a', roles: [{ role: Role.Diner }] },
    { id: 'fedcba21-43ba-4fed-9cba-fedcba987654', name: 'Lila Patel', email: 'lila@jwt.com', password: 'a', roles: [{ role: Role.Diner }] },
    { id: 'aabbccdd-eeff-4a4a-9a9a-bbccddeeff00', name: 'Aiden Kim', email: 'aiden@jwt.com', password: 'a', roles: [{ role: Role.Diner }] },
    { id: '11223344-5566-4b4b-9b9b-ccddeeff0011', name: 'Sofia Nguyen', email: 'sofia@jwt.com', password: 'a', roles: [{ role: Role.Diner }] },
    { id: '99887766-5544-4c4c-9c9c-bbaa99887766', name: 'Emilio Costa', email: 'emilio@jwt.com', password: 'a', roles: [{ role: Role.Diner }] },
    { id: '44556677-3322-4d4d-9d9d-ccbbaa445566', name: 'Amara Ali', email: 'amara@jwt.com', password: 'a', roles: [{ role: Role.Diner }] },
    { id: '65432109-8765-4e4e-9e9e-0123456789ab', name: 'Niki Petrov', email: 'niki@jwt.com', password: 'a', roles: [{ objectId: 'abb3423f2-4e1d-4d2d-9e8a-3e9c1a2b6d77', role: Role.Franchisee }] },
    { id: '01234567-8901-4f4f-9f9f-9876543210ab', name: 'Luna Santos', email: 'luna@jwt.com', password: 'a', roles: [{ objectId: 'abb3423f2-4e1d-4d2d-9e8a-3e9c1a2b6d77', role: Role.Franchisee }] },
  ];

  franchises: Franchise[] = [
    {
      name: 'SuperPie',
      admins: [{ id: '12345678-1234-4abc-9def-123456789abc', name: 'Rajah Singh', email: 'f@jwt.com' }],
      id: 'e7b6a8f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
      stores: [
        { id: '12345678-1234-4abc-9def-123456789abc', name: 'Orem', totalRevenue: 3.0 },
        { id: '87654321-4321-4def-9abc-987654321def', name: 'Provo', totalRevenue: 5.3 },
        { id: 'abcdef12-34ab-4def-9abc-abcdef123456', name: 'Payson', totalRevenue: 23.2 },
      ],
    },
    {
      name: 'LotaPizza',
      admins: [
        { id: '01234567-8901-4f4f-9f9f-9876543210ab', name: 'Luna Santos', email: 'luna@jwt.com' },
        { id: '65432109-8765-4e4e-9e9e-0123456789ab', name: 'Niki Petrov', email: 'niki@jwt.com' },
      ],
      id: 'abb3423f2-4e1d-4d2d-9e8a-3e9c1a2b6d77',
      stores: [
        { id: 'aabbccdd-eeff-4a4a-9a9a-bbccddeeff00', name: 'Lehi', totalRevenue: 0.25 },
        { id: '11223344-5566-4b4b-9b9b-ccddeeff0011', name: 'Springville', totalRevenue: 1.9 },
        { id: '99887766-5544-4c4c-9c9c-bbaa99887766', name: 'American Fork', totalRevenue: 4.802 },
      ],
    },
    {
      name: 'PizzaCorp',
      admins: [{ id: '65432109-8765-4e4e-9e9e-0123456789ab', name: 'Niki Petrov', email: 'niki@jwt.com' }],
      id: '978b3423f2-4e1d-4d2d-9e8a-3e9c1a2b6d78',
      stores: [{ id: '44556677-3322-4d4d-9d9d-ccbbaa445566', name: 'Spanish Fork', totalRevenue: 3000000 }],
    },
  ];

  orderHistory: OrderHistory[] = [
    {
      id: 'ph1',
      dinerId: '87654321-4321-4def-9abc-987654321def',
      orders: [
        {
          id: 'e7b6a8f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
          franchiseId: 'e7b6a8f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
          storeId: '12345678-1234-4abc-9def-123456789abc',
          date: '2024-03-10T00:00:00Z',
          items: [
            { menuId: 'a11111111-1111-1111-1111-111111111111', description: 'Veggie', price: 0.05 },
            { menuId: 'a21111111-1111-1111-1111-111111111111', description: 'Margarita', price: 0.00345 },
          ],
        },
      ],
    },
    {
      id: 'ph2',
      dinerId: 'abcdef12-34ab-4def-9abc-abcdef123456',
      orders: [
        {
          id: 'e7b3423f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
          franchiseId: 'e7b6a8f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
          storeId: '12345678-1234-4abc-9def-123456789abc',
          date: '2023-03-10T00:00:00Z',
          items: [
            { menuId: 'a4111111-1111-1111-1111-111111111111', description: 'Pepperoni', price: 0.005 },
            { menuId: 'a3111111-1111-1111-1111-111111111111', description: 'Crusty', price: 0.0045 },
          ],
        },
      ],
    },
  ];

  isRole(user: User | null, role: Role): boolean {
    return user != null && !!user.roles.find((r) => r.role === role);
  }

  async login(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      if (!!email && !!password) {
        const user = this.users.find((user) => user.email === email && user.password === password);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
          return;
        }
      }
      reject({ code: 404, msg: 'not found' });
    });
  }

  async register(name: string, email: string, password: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
      if (!!email && !!password) {
        let user = this.users.find((user) => user.email === email);
        if (user) {
          reject({ code: 409, msg: 'user already exists' });
        }
        user = { id: this.generateUUID(), name: name, email: email, password: password, roles: [{ role: Role.Diner }] };
        this.users.push(user);
        await this.login(email, password);
        resolve(user);
      } else {
        reject({ code: 400, msg: 'invalid' });
      }
    });
  }

  async logout(): Promise<void> {
    return new Promise((resolve) => {
      localStorage.removeItem('user');
      resolve();
    });
  }

  async getUser(): Promise<User | null> {
    return new Promise((resolve) => {
      let user: User | null = JSON.parse(localStorage.getItem('user') || 'null');
      return resolve(user);
    });
  }

  async getMenu(): Promise<Menu> {
    return new Promise((resolve) => {
      resolve(pizzaMenu);
    });
  }

  async getOrders(requestUser): Promise<OrderHistory> {
    return new Promise(async (resolve) => {
      let result: OrderHistory = {} as OrderHistory;

      if (requestUser) {
        const user = await this.getUser();
        if (user && (this.isRole(user, Role.Admin) || user.id === requestUser.id)) {
          const orderHistory: OrderHistory | undefined = this.orderHistory.find((order) => order.dinerId === requestUser.id);
          if (orderHistory) {
            result = orderHistory;
          }
        }
      }
      resolve(result);
    });
  }

  async order(order: Order): Promise<Order> {
    return new Promise(async (resolve, reject) => {
      const user = await this.getUser();
      if (user) {
        order.id = this.generateUUID();
        order.date = new Date().toISOString();

        let userOrderHistory: OrderHistory | undefined = this.orderHistory.find((order) => order.id === user.id);
        if (!userOrderHistory) {
          userOrderHistory = { id: this.generateUUID(), dinerId: user.id, orders: [] };
          this.orderHistory.push(userOrderHistory);
        }
        userOrderHistory.orders = [order, ...userOrderHistory.orders];

        this.franchises.find((franchise) => {
          const store = franchise.stores.find((store) => store.id === order.storeId);
          if (store) {
            store.totalRevenue = (store.totalRevenue ?? 0) + order.items.reduce((total, item) => total + item.price, 0);
            return true;
          }
          return false;
        });
        resolve(order);
      } else {
        reject({ code: 401, msg: 'unauthorized' });
      }
    });
  }

  async getFranchise(franchiseUser: User): Promise<Franchise | null> {
    return new Promise(async (resolve) => {
      if (franchiseUser) {
        const user = await this.getUser();
        if (user != null && (this.isRole(user, Role.Franchisee) || this.isRole(user, Role.Admin))) {
          const franchise = this.franchises.find((franchise) => (franchise.admins ?? []).find((a) => a.id === franchiseUser.id));
          if (franchise) {
            resolve(franchise);
            return;
          }
        }
      }
      resolve(null);
    });
  }

  async createFranchise(franchise: Franchise): Promise<Franchise> {
    return new Promise((resolve, reject) => {
      if (franchise && franchise.name && (franchise.admins ?? []).length > 0) {
        const franchiseAdmin = this.users.find((user) => (franchise.admins ?? []).find((a) => a.id === user.id));
        if (franchiseAdmin) {
          if (this.franchises.find((candidate) => candidate.name === franchise.name)) {
            reject({ code: 409, msg: 'franchise already exists' });
            return;
          }

          franchiseAdmin.roles.push({ role: Role.Franchisee, objectId: franchise.id });
          franchise.id = this.generateUUID();
          this.franchises.push(franchise);
          resolve(franchise);
          return;
        }
      }
      reject({ code: 400, msg: 'invalid' });
    });
  }

  async getFranchises(): Promise<Franchise[]> {
    return new Promise(async (resolve, reject) => {
      const user = await this.getUser();
      if (this.isRole(user, Role.Admin)) {
        resolve(this.franchises);
      } else {
        resolve(
          this.franchises.map((franchise) => {
            return {
              name: franchise.name,
              id: franchise.id,
              stores: franchise.stores.map((store) => {
                return { id: store.id, name: store.name };
              }),
            };
          })
        );
      }
    });
  }

  async closeFranchise(franchise: Franchise): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const user = await this.getUser();
      if (this.isRole(user, Role.Admin)) {
        this.franchises = this.franchises.filter((f) => f.id !== franchise.id);
        resolve();
        return;
      }
      reject({ code: 401, msg: 'unauthorized' });
    });
  }

  async createStore(franchise: Franchise, store: Store): Promise<Store> {
    return new Promise(async (resolve, reject) => {
      if (store?.name) {
        const user = await this.getUser();
        if (this.isRole(user, Role.Franchisee) || this.isRole(user, Role.Admin)) {
          const dbFranchise = this.franchises.find((candidate) => candidate.name === franchise.name);
          if (dbFranchise) {
            if (dbFranchise.stores.find((candidate) => candidate.name === store.name)) {
              reject({ code: 409, msg: 'store already exists' });
              return;
            }
            store.totalRevenue = 0;
            store.id = this.generateUUID();
            dbFranchise.stores.push(store);
            resolve(store);
            return;
          }
        }
      }
      reject({ code: 400, msg: 'invalid' });
    });
  }

  async closeStore(franchise: Franchise, store: Store): Promise<null> {
    return new Promise(async (resolve, reject) => {
      const user = await this.getUser();
      if (this.isRole(user, Role.Franchisee) || this.isRole(user, Role.Admin)) {
        const dbFranchise = this.franchises.find((candidate) => candidate.name === franchise.name);
        if (dbFranchise) {
          dbFranchise.stores = dbFranchise.stores.filter((s) => s.id !== store.id);
          resolve(null);
          return;
        }
      }
      reject({ code: 401, msg: 'unauthorized' });
    });
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

const memoryPizzaService = new MemoryPizzaService();
export default memoryPizzaService;
