<template>
  <v-layout row>
    <v-flex xs6>
      <panel title='Overview'>
        <v-flex xs8>
          <v-text-field
            label="Net Pay/Check"
            type="number"
            v-model="netpaycheck"
            prefix="$"
          ></v-text-field>
          <v-text-field
            label="Net Pay/Month"
            type="number"
            v-model="netpaymonth"
            prefix="$"
            disabled
          ></v-text-field>
          <v-text-field
            label="Net Spending Money"
            type="number"
            prefix="$"
            v-model="netspending"
            disabled
          ></v-text-field>
          <v-btn class="green darken-2" flat dark @click="calcFinData">
            Calculate
          </v-btn>
        </v-flex>
      </panel>
    </v-flex>

    <v-flex xs6>
      <panel title='Fixed Expenses'>
        <v-flex xs8>
          <v-text-field
            label="Rent"
            type="number"
            prefix="$"
            v-model="rent"
          ></v-text-field>
          <v-text-field
            label="Electricity"
            type="number"
            prefix="$"
            v-model="electricity"
          ></v-text-field>
          <v-text-field
            label="Auto Loan"
            type="number"
            prefix="$"
            v-model="autoloan"
          ></v-text-field>
          <v-text-field
            label="GEICO Insurance"
            type="number"
            prefix="$"
            v-model="geico"
          ></v-text-field>
          <v-text-field
            label="Nelnet"
            type="number"
            prefix="$"
            v-model="nelnet"
          ></v-text-field>
          <v-text-field
            label="Gym Membership"
            type="number"
            prefix="$"
            v-model="gym"
          ></v-text-field>
          <v-text-field
            label="Cellphone Bill"
            type="number"
            prefix="$"
            v-model="cellphone"
          ></v-text-field>
        </v-flex>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import FinancialDataService from '@/services/FinancialDataService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      financialdata: 'test',
      // overview
      netpaycheck: '0',
      netpaymonth: '0',
      netspending: '0',
      // fixed expenses
      rent: '0',
      electricity: '0',
      autoloan: '0',
      geico: '0',
      nelnet: '0',
      gym: '0',
      cellphone: '0'
    }
  },
  async mounted () {
    try {
      const financialdata = (await FinancialDataService.index({
        userId: this.$store.state.user.id
      })).data
      console.log(financialdata)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    calcFinData () {
      this.net_paymonth = parseFloat(this.net_paycheck * 2)
      var fixedExpenses = parseFloat(this.rent) + parseFloat(this.electricity) + parseFloat(this.autoloan) + parseFloat(this.geico) + parseFloat(this.nelnet) + parseFloat(this.gym) + parseFloat(this.cellphone)
      this.net_spending = this.net_paymonth - fixedExpenses
    }
    // updateFinancialData() {
    //   try {
    //     await FinancialDataService.post({
    //       userId: this.$store.state.user.id
    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
