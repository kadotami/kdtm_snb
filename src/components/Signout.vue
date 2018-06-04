<<template lang="pug">
  
</template>

<script>
import router from '../router'
export default {
  created: function () {
    localStorage.removeItem('kdtm_token')
    router.push('signin')
  }
}
</script>

