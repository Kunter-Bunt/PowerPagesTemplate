export class Home {
    constructor() {
        console.log('Home constructor');
    }

    public onLoad(userId: string) {
        if (userId) {
            console.log(`Home onLoad called with user: ${userId}`);
        }
        else {
            console.log('Home onLoad called by anonymous user.');
        }
    }
}