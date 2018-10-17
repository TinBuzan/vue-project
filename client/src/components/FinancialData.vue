<template>
  <v-layout row>
    <v-flex xs6>
      <panel title='Overview'>
        <v-flex xs8>
          <v-text-field
            label="Net Pay/Check"
            type="number"
            v-model="financialdata.netpaycheck"
            prefix="$"
          ></v-text-field>
          <v-text-field
            label="Net Pay/Month"
            type="number"
            v-model="financialdata.netpaymonth"
            prefix="$"
            disabled
          ></v-text-field>
          <v-text-field
            label="Net Spending Money"
            type="number"
            prefix="$"
            v-model="financialdata.netspendingmonth"
            disabled
          ></v-text-field>
        </v-flex>
      </panel>
    </v-flex>

    <v-flex xs6 ml-2>
      <panel title='Fixed Expenses'>
        <v-flex xs8>
          <v-text-field
            label="Rent"
            type="number"
            prefix="$"
            v-model="financialdata.rent"
          ></v-text-field>
          <v-text-field
            label="Electricity"
            type="number"
            prefix="$"
            v-model="financialdata.electricity"
          ></v-text-field>
          <v-text-field
            label="Auto Loan"
            type="number"
            prefix="$"
            v-model="financialdata.autoloan"
          ></v-text-field>
          <v-text-field
            label="GEICO Insurance"
            type="number"
            prefix="$"
            v-model="financialdata.autoinsurance"
          ></v-text-field>
          <v-text-field
            label="Nelnet"
            type="number"
            prefix="$"
            v-model="financialdata.studentloan"
          ></v-text-field>
          <v-text-field
            label="Gym Membership"
            type="number"
            prefix="$"
            v-model="financialdata.gym"
          ></v-text-field>
          <v-text-field
            label="Cellphone Bill"
            type="number"
            prefix="$"
            v-model="financialdata.phonepayment"
          ></v-text-field>
          <v-btn class="green darken-2" flat dark @click="calcFinData">
            Calculate
          </v-btn>
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
      financialdata: {}
    }
  },
  async mounted () {
    try {
      this.financialdata = (await FinancialDataService.index({
        userId: this.$store.state.user.id
      })).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    // calculate expenses and monthly budget
    calcFinData () {
      this.financialdata.netpaymonth = parseFloat(this.financialdata.netpaycheck * 2)
      var fixedExpenses = parseFloat(this.financialdata.rent) + parseFloat(this.financialdata.electricity) + parseFloat(this.financialdata.autoloan) + parseFloat(this.financialdata.autoinsurance) + parseFloat(this.financialdata.studentloan) + parseFloat(this.financialdata.gym) + parseFloat(this.financialdata.phonepayment)
      this.financialdata.netspendingmonth = this.financialdata.netpaymonth - fixedExpenses

      this.setFinData()
    },
    // update db
    async setFinData () {
      try {
        await FinancialDataService.post({
          financialdata: this.financialdata,
          userId: this.$store.state.user.id
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
