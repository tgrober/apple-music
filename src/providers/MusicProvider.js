export default class MusicProvider {

    static sharedProvider() {
        if(!MusicProvider.instance) {
            MusicProvider.instance = new MusicProvider();
        }
        return MusicProvider.instance;
    }

    configure() {
        window.MusicKit.configure({
            developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhRMjI5VjRNOVUifQ.eyJpYXQiOjE2MzAyNzE5MDIsImV4cCI6MTY0NTgyMzkwMiwiaXNzIjoiVzlNOVBUVjNSSiJ9._MNLp1WK7DhDAo85bTgKpBGBPL-b2gMm1YTymYKrpplH-JYHawbUyVnbFdgPRnQp1P_LvsQkd-t2E7LisXSlgg',
            app: {
                name: 'Share List',
                build: '2021.8.29'
            }
        });
    }

    getMusicInstance() {
        return window.MusicKit.getInstance();
    }
}