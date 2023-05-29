<template>
  <el-tabs v-model="tabActive" @tab-click="fetch">
    <el-tab-pane label="Últimos Empréstimos" name="emprestimos">
      <div>
        <biblioteca-p class="opacity--50 my--md">( Sem empréstimos )</biblioteca-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos livros" name="livros">
      <div>
        <biblioteca-p class="opacity--50 my--md">( Sem livros )</biblioteca-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos usuários" name="usuarios">
      <div>
        <biblioteca-p class="opacity--50 my--md">( Sem usuários )</biblioteca-p>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

export default {
  name: 'BibliotecaHomeTabs',
  components: {
  },
  data() {
    return {
      tabActive: 'emprestimos',
    };
  },
};
</script>
