import Sidebar from '@/components/sideBar.vue';
import Cbanner from '@/components/banner.vue';
import Cindex from '@/components/contentIndex.vue';
import Cteam from '@/components/contentTeam.vue';
import Cidea from '@/components/contentIdea.vue';
import Cbusiness from '@/components/contentBusiness.vue';

//
import bus from '@/js/event'

export default {
    name: 'Index',
    mounted() {
        var self = this
        bus.$on('toChangePage', function (index) {
            self.$forceUpdate()
            self.$set(self.page, 'pageNow', index)
        })
        bus.$on('overFlowHidden', function (index) {
            self.$forceUpdate()
            self.$set(self.page, 'overFlowHidden', index)
        })
    },
    data() {
        return {
            page: {
                overFlowHidden:false,
                pageNow:0,
            }
        }
    },
    methods: {
    },
    components: {
        Sidebar,
        Cbanner,
        Cindex,
        Cteam,
        Cidea,
        Cbusiness,
    },
}
